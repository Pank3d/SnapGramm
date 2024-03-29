import { bottombarLinks  } from '@/constans';
import { INavLink } from '@/types';
import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

export const BottomBar = () => {
  const {pathname} =  useLocation()
  return (
    <section className="bottom-bar">
      {bottombarLinks.map((link) => {
        const isActive = pathname === link.route;
        return (
          
            <Link to={link.route} key={link.label}
            className={`  ${
              isActive && "bg-primary-500 rounded-[10px]"
            } flex-center flex-col gap-1 p-2 transition`}>
              <img
                className={` ${
                  isActive && "invert-white"
                }`}
                src={link.imgURL}
                alt={link.label}
                width={16}
                height={16}
              />
              <p className='tiny-medium text-light-2'>{link.label}</p>
            </Link>
          
        );
      })}
    </section>
  );
}
