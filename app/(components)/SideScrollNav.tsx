import * as Scroll from 'react-scroll';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function SideScrollNav() {
    return (
        <nav>
            <ul>
                <li>
                    <Link activeClass="active" smooth spy to="about">
                        ABOUT
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="projects">
                        PROJECTS
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="blog">
                        BLOG
                    </Link>
                </li>
                <li>
                    <Link activeClass="active" smooth spy to="contact">
                        CONTACT ME
                    </Link>
                </li>
            </ul>
        </nav>
    )
}