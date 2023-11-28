import { Outlet } from "react-router-dom"
import { Menu } from 'antd';
import { useState } from "react";
import { Link } from "react-router-dom";

export  function Layout() {
  const items = [{
    label: (
        <Link to="/"  rel="noopener noreferrer">
          Home
        </Link>
      ),
      key: 'home',
    },
  ]

  const [current, setCurrent] = useState('home');
  const onClick = (e) => {
    setCurrent(e.key);
  };

  return (
    <div className="container">
        <header>
          <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
        </header>
        <main className="page">
          <Outlet/>
        </main>
    </div>
  )
}
