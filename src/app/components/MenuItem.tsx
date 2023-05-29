import Link from 'next/link';

const MenuItem = ({
    title,
    address,
    Icon,
}: {
    title: string,
    address: string,
    Icon: any,
}) => {
    return (
        <>
            <Link href={address} className='mx-4 lg:mx-6 hover:text-amber-600'>
                <Icon className='text-2xl sm:hidden mx-4'/>
                <p className='hidden sm:inline'>{title}</p>
            </Link>
        </>
    );
};

export default MenuItem;