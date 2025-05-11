'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from "@/components/layout/Layout";
import DetailPage from "@/components/common/DetailPage";
import ProductDetail from "@/components/product/ProductDetail";

// Define the Product interface
interface Product {
  id: number;
  title: string;
  shortDescription: string;
  category: string;
  image: string;
  // Extended properties for detail page
  description?: string;
  images?: string[];
  specifications?: string[];
  technologies?: string[];
}

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await import('@/data/products.json');
        const productId = parseInt(params.id as string);
        
        // Find the product with matching ID
        const foundProduct = data.default.find((p: Product) => p.id === productId);
        
        if (foundProduct) {
          setProduct(foundProduct);
        } else {
          // Product not found, redirect to products page
          router.push('/products');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading product:', error);
        setLoading(false);
      }
    }

    loadProduct();
  }, [params.id, router]);

  if (loading) {
    return (
      <Layout headerStyle={12} footerStyle={18}>
        <div className="container mt-100 mb-100">
          <div className="text-center">
            <div className="spinner-border" style={{ color: '#0075DC' }} role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  if (!product) {
    return (
      <Layout headerStyle={12} footerStyle={18}>
        <div className="container mt-100 mb-100">
          <div className="text-center">
            <h2>Product not found</h2>
            <p>The product you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={12} footerStyle={18}>
      <div style={{ width: '100%' }}>
        <DetailPage
          title={product.title}
          breadcrumbItems={[
            { label: 'Home', link: '/' },
            { label: 'Products', link: '/products' },
            { label: product.title }
          ]}
          backgroundColor="rgba(0, 27, 43, 0.85)"
          category={product.category}
        >
          <ProductDetail
            id={product.id.toString()}
            title={product.title}
            description={product.description || product.shortDescription}
            images={product.images || [product.image]}
            category={product.category}
            specifications={product.specifications || []}
            technologies={product.technologies || []}
          />
        </DetailPage>
      </div>
    </Layout>
  );
}