import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
    return <div className="w-full max-w-6xl mx-auto px-10 md:px-4 xl:px-0">
        <div className="text-center py-12">
            <h3 className="text-3xl font-bold py-4">Get in touch</h3>
            <p className="text-md">Wether is for saying hello, or maybe you would like to discuss work related stuff, please feel free to send me an email. </p>
            <p>You can also reach me on <a className="font-bold hover:underline" target="_blank" rel="noreferrer" href="https://twitter.com/@AngelinCalu">Twitter</a>, <a className="font-bold hover:underline" target="_blank" rel="noreferrer" href="https://github.com/AngelinCalu">Github</a>, <a className="font-bold hover:underline" target="_blank" rel="noreferrer" href="https://linkedin.com/in/angelincalu">LinkedIn</a> or <a className="font-bold hover:underline" target="_blank" rel="noreferrer" href="https://facebook.com/angelin.calu">Facebook</a>.</p>
        </div>
        <div className="w-full flex flex-col-reverse md:flex-row items-center md:items-end justify-between pb-8 pt-8 text-sm">
            <span className="py-4 md:py-0">© 2020-present Angelin Calu. All Rights Reserved.</span>
            <div className="space-x-4 divide-x divide-gray-300">
                <Link to="/" title="Home" className="inline-block pl-4 hover:underline">Home</Link>
                <Link to="/about" title="About" className="inline-block pl-4 hover:underline">About</Link>
                <Link to="/blog" title="Blog" className="inline-block pl-4 hover:underline">Blog</Link>
                <Link to="/shipbuilding" title="Shipbuilding" className="inline-block pl-4 hover:underline">Shipbuilding</Link>
                <Link to="/contact" title="Contact" className="inline-block pl-4 hover:underline">Contact</Link>
            </div>
        </div>
    </div>;
}

export default Footer;