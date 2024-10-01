import Image from "next/image";

export default function Home() {
  return (
    <div className="whole-body">
      <div className="headings">
        <h2> Assalam-o-Alikum!</h2>
        <h1>Hi, I'm <span>Rameen Rashid</span></h1>
        <h3>Future Cloud Applied Gen-AI Engineer</h3>
      </div>
      <div className="picture">
        <Image src={"/girl-removebg-preview-1.png"} alt={"profile-pic"} width={350} height={500} className="profile-pic" />
      </div>
    </div>
  );
}
