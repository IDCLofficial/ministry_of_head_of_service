type event = {
  slug: string;
  date: string;
  location: string;
  title: string;
  description: string;
  img: string;
  time: string;
  organizer: string;
  phone: string;
  address: string;
  speakers: {
    name: string;
    img: string;
    role: string;
  }[];
}

const events: event[] = [
  {
    slug: "imo-may-day-2025",
    date: "2025-05-01",
    location: "Rear Admiral Ndubuisi Kalu Square, New Owerri",
    title: "Imo State 2025 May Day / Workers' Celebration",
    description:
      "Annual May Day celebration attended by civil servants across Imo State — speeches from the Head of Service and state labour leaders, parade and civic recognitions.",
    img: "/images/events/workers_day.jpg",
    time: "08:00 AM",
    organizer: "Imo State Head of Service / Imo State Government",
    phone: "",
    address: "New Owerri (Rear Admiral Ndubuisi Kalu Square)",
    speakers: [
      {
        name: "State Labour Leader",
        img: "/images/events/Uzodimma.jpeg",
        role: "Guest speaker"
      },
      {
        name: "Head of Service, Imo State",
        img: "/images/commissioner.png",
        role: "Keynote speaker"
      },
    ]
  },
  {
    slug: "state-of-the-state-address-june-24-2025",
    date: "2025-06-24",
    location: "Imo State House of Assembly Complex, New Owerri",
    title: "State of the State Address (rescheduled)",
    description:
      "Official State of the State address by the Governor of Imo State — important for civil servants because it outlines the government's priorities, budgets and programme commitments affecting MDAs and the civil service.",
    img: "/images/events/Uzodimma.jpeg",
    time: "12:00 PM",
    organizer: "Imo State Government / Governor's Office",
    phone: "09155001010", // general citizen centre line (state media)
    address: "Imo State House of Assembly Complex, New Owerri",
    speakers: [
      {
        name: "Governor Hope Uzodimma",
        img: "/images/events/Uzodimma.jpeg",
        role: "Keynote speaker"
      }
    ]
  },
  {
    slug: "imo-civil-service-commission-inauguration-2025",
    date: "2025-03-??",
    location: "Government House / New Owerri",
    title: "Inauguration of Imo State Civil Service Commission (new board)",
    description:
      "Governor administered oath and inaugurated the newly constituted Board of the Imo State Civil Service Commission — significant for appointments, postings and civil service administration in the state.",
    img: "/images/events/civilServants_swearing.png",
    time: "10:00 AM",
    organizer: "Governor's Office, Imo State / Civil Service Commission",
    phone: "",
    address: "Government House, New Owerri",
    speakers: [
      {
        name: "Governor Hope Uzodimma",
        img: "/images/speakers/hope-uzodimma.jpg",
        role: "Inaugurating officer"
      },
      {
        name: "Chair, Imo State Civil Service Commission",
        img: "/images/speakers/csc-chair.jpg",
        role: "Commission Chair"
      }
    ]
  }
];


export default events; 