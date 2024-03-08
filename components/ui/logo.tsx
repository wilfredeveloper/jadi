import Link from 'next/link'

export default function Logo() {
    return(
        <Link
            className="flex h-10 text-slate-300 items-center justify-center text-2xl tracking-widest"
            href="/"
          >
            JADI
        </Link>
    )
}