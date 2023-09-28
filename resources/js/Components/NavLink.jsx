import { Link } from '@inertiajs/react';
import { info } from 'autoprefixer';

export default function NavLink({ active = false, info, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            style={{ color: info.color_letra_navbar!='' ? info.color_letra_navbar : 'black' }}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-md font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-indigo-400 focus:border-indigo-700 '
                    : 'border-transparent hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ') +
                className
            }
        >
            {children}
        </Link>
    );
}

