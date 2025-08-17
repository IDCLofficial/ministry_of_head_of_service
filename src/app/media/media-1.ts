interface MediaItem {
    image: string;
    title: string;
    isVideo?: boolean;
  }
  export const mediaItems: MediaItem[] = [
    {
      image: "/images/media/civil_service_day.jpg",
      title: "Governor Hope Uzodimma with Head of Service at Imo State Secretariat",
      isVideo:false
    },
    {
      image: "/images/media/state_admin_building.jpg",
      title: "Imo State Government Administrative Building",
      isVideo:false
    },
    {
      image: "/images/media/international_conference_center.jpg",
      title: "Interior of Imo International Conference Centre, Owerri",
      isVideo:false
    },
    {
      image: "/images/media/conference-centre-exterior.png",
      title: "Exterior of Imo International Conference Centre, Owerri",
      isVideo:false
    }
  ];
  