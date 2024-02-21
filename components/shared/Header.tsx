import Image from "next/image"
import Link from "next/link"
import { NavItems, MobileNav } from "@/components/shared"
// import { SignedIn, SignedOut } from "@clerk/nextjs"
// import { Button } from "@/components/ui/button"

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36 mr-5">
            <Image src="/assets/images/logo.svg" width={128} height={38} alt="Evently" />
        </Link>

        {/* <SignedIn> */}
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        {/* </SignedIn> */}

        <div className="flex-1 w-32 justify-end gap-3">
          {/* <SignedIn> */}
            <MobileNav />
          {/* </SignedIn> */}

          {/* <SignedOut> */}
            {/* <Button className="rounded-full" size="lg" asChild>
              <Link href="/sign-in">Login</Link>
            </Button> */}
          {/* </SignedOut> */}
        </div>
      </div>
    </header>
  )
}

export default Header
