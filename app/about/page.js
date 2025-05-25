import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md md:max-w-lg lg:max-w-xl bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8 text-center">
        {/* IMAGE */}
        <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg border-4 border-pink-300">
          <Image
            src="/images/girl-1.jpg"
            alt="Cartoon Girl"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        {/* HEADING */}
        <h1 className="text-4xl font-extrabold text-pink-600 mt-4">
          Hey! I&apos;m a <span className="text-purple-500">dedicated web developer</span>
        </h1>

        {/* INTRODUCTION PARAGRAPHS */}
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-200">
          I&apos;m a passionate <span className="font-semibold text-pink-500">Web Developer</span> with a completed 
          journey in web development from beginner to full-stack 🚀.
        </p>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          I mastered HTML, CSS, JavaScript and fell in love with modern frameworks like React & Next.js. 
          I transform ideas into beautiful, responsive websites!
        </p>

        <p className="mt-2 text-gray-600 dark:text-gray-300">
          I believe in continuous learning and creating magic ✨ with code.
          Let&apos;s make the internet more vibrant together!
        </p>
      </div>
    </div>
  );
}
