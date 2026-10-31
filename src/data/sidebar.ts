import { LuUser, LuWrench, LuLibraryBig, LuPresentation, LuImages } from "react-icons/lu";

export const sidebar = {
  userName: `Yassine Ghorbel`,
  profileImage: `/images/profile.jpg`,
  sections: [
    {
      title: `About Me`,
      url: ``,
      icon: LuUser
    },
    {
      title: `Projects`,
      url: `projects`,
      icon: LuWrench
    },
    {
      title: `Publications`,
      url: `publications`,
      icon: LuLibraryBig
    },
    {
      title: `Talks`,
      url: `talks`,
      icon: LuPresentation
    },
    {
      title: `Memories`,
      url: `memories`,
      icon: LuImages
    }
  ]
};