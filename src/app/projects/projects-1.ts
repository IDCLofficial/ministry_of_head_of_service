interface project {
  title: string;
  image: string;
  status: string,
  description: string;
}


export const projects:project[] = [
  {
    title: "Digital HR Records Management System",
    image: "/images/digitalmgt.jpg",
    status: "ongoing",
    description: "Development of a secure, centralized digital database for managing civil servant records and improving administrative efficiency."
  },
  {
    title: "Staff Audit & Verification Program",
    image: "/images/audit.jpg",
    status: "ongoing",
    description: "A continuous effort to ensure that only qualified and verified personnel are retained within the civil service structure."
  },
  {
    title: "Pension Reform Initiative",
    image: "/images/pension.jpg",
    status: "ongoing",
    description: "Automation of pension processing workflows for timely verification, approval, and payment of entitlements to retired staff."
  },
  {
    title: "2024 Civil Service Reform Policy Launch",
    image: "/images/civil.jpg",
    status: "completed",
    description: "Roll-out of a new reform policy aimed at strengthening ethical standards, transparency, and performance evaluation across ministries."
  },
  {
    title: "Training Workshops in Partnership with ASCON",
    image: "/images/ascon.jpg",
    status: "completed",
    description: "Capacity-building workshops conducted for over five hundred civil servants across ten ministries, focused on productivity and service excellence."
  },
];