'use client'
import Layout from "@/components/layout/Layout";
import Projects from "@/components/sections/home12/Projects";

export default function ProjectsPage() {
  return (
    <Layout headerStyle={12} footerStyle={18}>
      <Projects isHomePage={false} />
    </Layout>
  );
}