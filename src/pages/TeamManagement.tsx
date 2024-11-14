import MainHeader from "@/components/shared/MainHeader";

const TeamManagement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <MainHeader />
      <main className="container mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent mb-3">
          Team Management
        </h2>
        <p className="text-gray-600 text-lg mb-8">
          Manage your sales team members and their permissions.
        </p>
        {/* Team Management content will be implemented later */}
      </main>
    </div>
  );
};

export default TeamManagement;