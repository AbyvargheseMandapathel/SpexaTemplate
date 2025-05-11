'use client';
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Layout from "@/components/layout/Layout";
import DetailPage from "@/components/common/DetailPage";
import ProjectDetail from "@/components/project/ProjectDetail";

// Define the Project interface
interface Project {
  id: number;
  title: string;
  shortDescription: string;
  category: string;
  image: string;
  // Extended properties for detail page
  description?: string;
  images?: string[];
  client?: string;
  date?: string;
  location?: string;
  technologies?: string[];
}

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProject() {
      try {
        const data = await import('@/data/projects.json');
        const projectId = parseInt(params.id as string);
        
        // Find the project with matching ID
        const foundProject = data.default.find((p: Project) => p.id === projectId);
        
        if (foundProject) {
          // Use data directly from projects.json without enhancement
          setProject(foundProject);
        } else {
          // Project not found, redirect to projects page
          router.push('/projects');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error loading project:', error);
        setLoading(false);
      }
    }

    loadProject();
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

  if (!project) {
    return (
      <Layout headerStyle={12} footerStyle={18}>
        <div className="container mt-100 mb-100">
          <div className="text-center">
            <h2>Project not found</h2>
            <p>The project you're looking for doesn't exist or has been removed.</p>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout headerStyle={12} footerStyle={18}>
      <div style={{ width: '100%' }}>
        <DetailPage
          title={project.title}
          breadcrumbItems={[
            { label: 'Home', link: '/' },
            { label: 'Projects', link: '/projects' },
            { label: project.title }
          ]}
          backgroundColor="rgba(0, 27, 43, 0.85)"
          category={project.category}
        >
          <ProjectDetail
            id={project.id.toString()}
            title={project.title}
            description={project.description || project.shortDescription}
            images={project.images || [project.image]}
            category={project.category}
            client={project.client || 'Confidential'}
            date={project.date || 'Recent'}
            location={project.location || 'International'}
            technologies={project.technologies || []}
          />
        </DetailPage>
      </div>
    </Layout>
  );
}