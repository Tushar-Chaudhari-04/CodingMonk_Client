import React from 'react'
import "./Navbar.scss"
import CodingBabaLogo from "../../assets/CodingMonk.PNG"

const Navbar = () => {
  return (
    <nav className='navbar'>
        <div className='navbar-left'>
            <div className='navbar-logo'>
                 <img className='codingbaba-logo' src={CodingBabaLogo} alt="CodingBabaLogo"/>
            </div>

          
                
        </div>
        <div className='navbar-center'>
            <ul className='cb-tabs'>
                <li>Courses</li>
                <li>Testimonials</li>
                <li>Contact</li>
                <li>FAQs</li>
            </ul>
        </div>

        <div className='navbar-right'>
            <button className='btn-primary login-btn'>Login</button>
            <button className='btn-primary enroll-btn'>Enroll Now</button>
        </div>
    </nav>
  )
}

export default Navbar

/*
<svg width="110" height="100%" viewBox="0 0 1700 421" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M653.822 118.005C646.624 133.43 629.141 143.971 611.145 143.971C582.865 143.971 560.241 119.804 560.241 89.9819C560.241 60.4164 582.865 35.9928 611.145 35.9928C628.884 35.9928 646.366 45.7622 653.565 61.4448H696.499C684.673 25.7091 650.994 0 611.145 0C561.526 0 521.163 40.3633 521.163 89.9819C521.163 139.601 561.526 179.964 611.145 179.964C650.994 179.964 684.93 153.998 696.756 118.005H653.822Z" fill="black"></path><path d="M894.759 89.7248C894.759 116.719 870.335 141.4 843.34 141.4C816.346 141.4 791.922 116.719 791.922 89.7248C791.922 62.7302 816.346 38.3066 843.34 38.3066C870.335 38.3066 894.759 62.7302 894.759 89.7248ZM933.322 89.9819C933.322 41.6488 891.674 0 843.34 0C795.007 0 753.359 41.6488 753.359 89.9819C753.359 138.315 795.007 179.964 843.34 179.964C891.674 179.964 933.322 138.315 933.322 89.9819Z" fill="black"></path><path d="M1036.81 141.914V38.3066H1048.38C1078.2 38.3066 1098.25 60.9306 1098.25 89.9819C1098.25 119.033 1077.94 141.914 1048.38 141.914H1036.81ZM998.76 2.57093V177.393H1050.69C1100.31 177.393 1137.59 139.343 1137.59 89.9819C1137.59 40.6204 1100.05 2.57093 1050.69 2.57093H998.76Z" fill="black"></path><path d="M1241.65 177.393V2.57093H1203.09V177.393H1241.65Z" fill="black"></path><path d="M1450.8 177.393V2.57093H1412.24V111.578L1352.08 2.57093H1313.52V177.393H1352.08V68.3863L1412.24 177.393H1450.8Z" fill="black"></path><path d="M1610.28 35.9928C1627.24 35.9928 1644.73 42.9342 1653.21 61.4448H1695.63C1683.55 25.1949 1648.84 0 1610.28 0C1560.91 0 1520.29 40.6204 1520.29 89.9819C1520.29 139.343 1560.91 179.964 1610.28 179.964C1660.15 179.964 1700 139.601 1700 89.9819V84.0688H1613.87V113.12H1658.35C1648.84 139.601 1627.24 144.999 1610.28 144.999C1582.51 144.999 1559.37 120.062 1559.37 90.4961C1559.37 60.9306 1582.51 35.9928 1610.28 35.9928Z" fill="black"></path><path d="M598.431 387.013C578.983 387.013 562.163 377.499 561.112 356.67H521.165C521.428 399.356 557.433 418.385 596.854 418.385C633.384 418.385 670.966 403.213 670.966 362.07C670.966 295.469 567.682 317.841 567.682 286.726C567.682 273.612 583.188 268.469 594.226 268.469C613.936 268.469 624.712 274.383 626.814 292.641H664.921C663.607 252.783 630.493 236.84 593.7 236.84C561.112 236.84 526.947 253.812 526.947 289.812C526.947 354.356 630.231 332.498 630.231 366.442C630.231 382.127 610.783 387.013 598.431 387.013Z" fill="#ED155A"></path><path d="M816.531 239.411V309.098H757.662V239.411H718.241V414.271H757.662V344.07H816.531V414.271H858.58V239.411H816.531Z" fill="#ED155A"></path><path d="M1018.18 239.411V340.47C1018.18 364.641 1010.82 378.27 983.755 378.27C956.949 378.27 949.327 364.641 949.327 340.47V239.411H909.906V346.127C909.906 392.67 937.238 416.842 983.755 416.842C1030.27 416.842 1057.6 392.67 1057.6 346.127V239.411H1018.18Z" fill="#ED155A"></path><path d="M1184.89 274.383H1235.88V239.411H1094.49V274.383H1145.47V414.271H1184.89V274.383Z" fill="#ED155A"></path><path d="M1352.53 274.383H1403.51V239.411H1262.12V274.383H1313.11V414.271H1352.53V274.383Z" fill="#ED155A"></path><path d="M1444.21 414.271H1547.75V379.299H1483.63V239.411H1444.21V414.271Z" fill="#ED155A"></path><path d="M1699.99 379.299H1635.86V344.07H1697.36V309.098H1635.86V274.383H1699.99V239.411H1596.44V414.271H1699.99V379.299Z" fill="#ED155A"></path><path d="M138.584 1.7469C139.485 0.855198 140.936 0.855203 141.837 1.7469L279.173 137.657C280.642 139.11 279.613 141.613 277.547 141.613H2.87368C0.807724 141.613 -0.22133 139.11 1.24713 137.657L138.584 1.7469Z" fill="#A60A39"></path><path d="M418.691 279.351C419.582 280.252 419.582 281.703 418.691 282.604L282.78 419.941C281.327 421.409 278.824 420.38 278.824 418.314L278.824 143.641C278.824 141.575 281.327 140.546 282.781 142.015L418.691 279.351Z" fill="#A60A39"></path><path d="M138.941 1.0002C141.749 0.99838 141.76 1.00948 145.223 1.00948H413.229C416.691 1.00948 419.498 3.81628 419.498 7.27864V275.549C419.498 279.012 416.691 281.818 413.229 281.818H145.223C141.76 281.818 138.941 279.009 138.941 275.547V1.0002Z" fill="#ED155A"></path><mask id="mask0_17_274" maskUnits="userSpaceOnUse" x="138" y="1" width="282" height="281"><path d="M419.5 275.543C419.5 279.005 419.5 278.342 419.5 281.813L145.225 281.812C141.762 281.812 138.955 279.005 138.955 275.543L138.955 7.27248C138.955 3.81013 141.762 1.00333 145.225 1.00333L413.231 1.0033C416.693 1.0033 419.5 3.81011 419.5 7.27245L419.5 275.543Z" fill="#ED155A"></path></mask><g mask="url(#mask0_17_274)"><path d="M628.068 81.3735C630.515 83.8229 630.515 87.7942 628.068 90.2436L176.318 542.419C173.871 544.869 169.904 544.869 167.457 542.419L27.4608 402.292C25.0137 399.842 25.0136 395.871 27.4607 393.422L479.211 -58.7543C481.658 -61.2037 485.625 -61.2037 488.072 -58.7543L628.068 81.3735Z" fill="#D0124F"></path></g><path d="M363.915 106.432C363.915 133.716 341.797 155.834 314.513 155.834C287.23 155.834 265.112 133.716 265.112 106.432C265.112 79.1489 287.23 57.0312 314.513 57.0312C341.797 57.0312 363.915 79.1489 363.915 106.432Z" fill="white"></path><path d="M55.5589 335.607L0.256525 389.357C0.0925123 389.516 0 389.735 0 389.964V419.613C0 420.08 0.379837 420.459 0.848388 420.459H28.5036C28.7227 420.459 28.9334 420.375 29.0914 420.223L85.5767 366.043C85.9175 365.716 85.925 365.175 85.5933 364.838L56.7551 335.62C56.4277 335.288 55.8932 335.282 55.5589 335.607Z" fill="#A60A39"></path><path d="M52.7167 197.436L0.679931 248.337C0.528548 248.485 0.443359 248.687 0.443359 248.898V303.031C0.443359 303.729 1.29316 304.083 1.79762 303.595L82.4318 225.529C82.1449 225.234 82.1866 225.275 81.871 224.965L53.3893 196.789C52.9921 197.16 53.0276 197.132 52.7167 197.436Z" fill="#A60A39"></path><path d="M195.445 338.609L113.099 418.689C112.589 419.185 112.937 420.054 113.646 420.054H170.546C170.753 420.054 170.953 419.972 171.1 419.824L223.817 367.22C223.534 366.93 223.569 366.965 223.26 366.654L196.001 339.167C195.697 338.86 195.713 338.87 195.445 338.609Z" fill="#A60A39"></path></svg>
*/