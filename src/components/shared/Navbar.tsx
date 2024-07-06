// import Image from "next/image";
// import Link from "next/link";
// import brandLogo from "@/assets/logo.png";

import Link from "next/link";

// const Navbar = () => {
//   return (
//     <div className="navbar bg-base-100  border-b  w-[90%] mx-auto">
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-5 w-5"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16"
//               />
//             </svg>
//           </div>
//           <ul
//             tabIndex={0}
//             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <Link href="/">Home</Link>
//             </li>
//             <li>
//               <Link href="/puzzles">Blogs</Link>
//             </li>
//             <li>
//               <Link href="/about">About Us</Link>
//             </li>
//             <li>
//               <Link href="/contact">Contact</Link>
//             </li>
//           </ul>
//         </div>
//         <Link href="/" className="btn btn-ghost text-xl">
//           <Image src={brandLogo} width={30} height={30} alt="brand logo" />
//           Blogiz
//         </Link>
//       </div>
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/blogs">Blogs</Link>
//           </li>
//           <li>
//             <Link href="/about">About Us</Link>
//           </li>
//           <li>
//             <Link href="/support">Support</Link>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-end">
//         <Link
//           href="/puzzles/create"
//           className="btn btn-accent text-white rounded-full px-5"
//         >
//           Post Blog
//         </Link>
//       </div>
//     </div>
//   );
// };

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">Puzzle-Platform</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/puzzles">Puzzle</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link className="btn" href="/singup">
          SingUp
        </Link>
      </div>
    </div>
  );
};
export default Navbar;
