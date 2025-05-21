import { Fragment } from "react";
import CarouselProject from "./_components/CarouselProject";
import ProjectList from "./_components/ProjectList";
import image1 from "@/public/assets/laptop-analyze.jpg";

export default async function ProjectPage() {
  const projects = [
    {
      name: "To-do List Project",
      slug: "whado",
      date: "26-03-2000",
      description:
        "A minimalist to-do list app featuring dynamic themes and category-based UI transformations that keep users organized and motivated throughout their day.",
      image: image1.src,
      url: "https://to-do-list-project-two-ivory.vercel.app/",
      github: "https://github.com/GilbertOwen/whado",
    },
    {
      name: "Clone of Pinterest - Likerest",
      slug: "likerest",
      date: "26-03-2000",
      description:
        "A Pinterest-inspired image-sharing platform where users can browse, like, and save visual content into customizable boards, complete with smooth UI animations.",
      image: image1.src,
      url: "https://likerest.vercel.app/",
      github: "https://github.com/GilbertOwen/likerest",
    },
    {
      name: "Website of Love Confession",
      slug: "loveuprojecta",
      date: "26-03-2000",
      description:
        "An interactive web app for sharing anonymous love confessions, enhanced with reaction emojis, comment threads, and community-driven engagement features.",
      image: image1.src,
      url: "https://love-u-projecta.vercel.app/",
      github: "https://github.com/GilbertOwen/loveuprojecta",
    },
  ];
  return (
    <Fragment>
        <CarouselProject></CarouselProject>
      <ProjectList projects={projects as any}></ProjectList>
    </Fragment>
  );
}
