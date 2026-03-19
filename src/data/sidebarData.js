export const sidebarData = {
  user: [
    { name: "Dashboard", path: "/user-management", icon: "📊" },
    { name: "User Roles", path: "/user-role", icon: "👤" },
    { name: "Menu Rights", path: "/menu-rights", icon: "📂" },
    { name: "Page Rights", path: "/page-rights", icon: "📄" },
    {
      name: "Users",
      icon: "👥",
      children: [
        { name: "Student Users", path: "/user" },
        { name: "Family Users", path: "/family-users" },
        { name: "Employee Users", path: "/employee-users" }
      ]
    }
  ],

 student: [
    {
      section: "STUDENT MANAGEMENT",
      items: [
        { name: "Dashboard", path: "/academic-years", icon: "📊" },
        { name: "Student Profiles", path: "/student-profiles", icon: "🪪" },
        { name: "Add Student", path: "/add-student", icon: "➕" },

        {
          name: "Student Management",
          icon: "👥",
          children: [
            { name: "Section Change", path: "/section-change" },
            { name: "Promotions", path: "/promotions" },
            { name: "Demotions", path: "/demotions" },
            { name: "Deregistration/Suspension", path: "/deregistration" },
            { name: "Transfer Certificate", path: "/transfer-certificate" }
          ]
        },

        { name: "Student Certificates", path: "/student-certificates", icon: "📜" }
      ]
    },

    {
      section: "CONFIGURATION",
      items: [
        { name: "Setup", path: "/setup", icon: "⚙️" },

        {
          name: "Setup Options",
          icon: "🔧",
          children: [
            { name: "Tabs and Sub Tabs", path: "/tabs-sub-tabs" },
            { name: "Add Tab", path: "/add-tab" },
            { name: "Profile Page Setup", path: "/profile-page-setup" },
            { name: "User Defined Fields", path: "/user-defined-fields" },
            { name: "Classes and Sections", path: "/add-class" }
          ]
        }
      ]
    }
  ]
};