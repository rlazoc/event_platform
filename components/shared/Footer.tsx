import Link from "next/link"
import Image from "next/image"

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/">
          <Image src="/assets/images/logo.svg" width={128} height={38} alt="logo" />
        </Link>
        <p>Evently Demo 2023</p>
        <a href="#" className="text-primary underline">Source code</a>
      </div>
    </footer>
  )
}

export default Footer