'use client'
import Layout from "@/components/layout/Layout";
import Products from "@/components/sections/home12/Products";

export default function ProductsPage() {
  return (
    <Layout headerStyle={12} footerStyle={18}>
      <Products isHomePage={false} />
    </Layout>
  );
}