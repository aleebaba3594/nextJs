import Link from "next/link";
import React from "react";

function Nav() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>its a main nav component</h1>
      <Link href="/users">
        <button>users</button>
      </Link>
      <Link href="/customers">
        <button>customers</button>
      </Link>
      <Link href="/contact">
        <button>contact</button>
      </Link>
      <Link href="/customers/client">
        <button>customers/client</button>
      </Link>
      <Link href="/customers/client/client1">
        <button>customers/client/client1</button>
      </Link>
      <Link href="/customers/client/client2">
        <button>customers/client/client2</button>
      </Link>
      <Link href="/books">
        <button>books</button>
      </Link>
      <Link href="/books/4">
        <button>books/id</button>
      </Link>
      <Link href="/shops">
        <button>shops</button>
      </Link>
      <Link href="/">
        <button>home</button>
      </Link>
    </div>
  );
}

export default Nav;
