import Link from "next/link"
import Image from "next/image"
import classes from "./main-header.module.css"

export default function MainHeader () {
    return (
        
        <header className={classes.header}>
            <Link href="/" className={classes.logo}>
            <Image src="/images/logos.png" alt="A bowl of plate" width={40} height={40} priority />
            Student Meal Planner
            </Link>

            <nav className={classes.nav}>
                <ul>
                    <li href='/'>Home</li>
                    <li href='/meals'>Meals</li>
                    <li href='/about'>About</li>
                </ul>
            </nav>
        </header>
        
    )
}