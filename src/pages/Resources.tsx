import PageHeader from "@/components/shared/PageHeader";

const Resources = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <PageHeader />
      <main className="container mx-auto px-4 py-12">
        <div className="mb-12">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
            Resources
          </h2>
          <p className="text-gray-600 text-lg">
            Helpful resources and guides for lead management.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Resources;