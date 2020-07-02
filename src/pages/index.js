import React from 'react';
import Layout from '../components/layout';
import './index.css';
import tom from '../images/tom.jpg';
import fua from '../images/fua.jpg';
import rungs from '../images/rungs.jpeg';
import Item from '../components/Item';

export default function Home() {
    return (
        <Layout>
            <div className="app">
                <div className="header">
                    <h1>
                        <span>
                            FANCYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
                        </span>
                    </h1>
                    <div className="about">
                        <div>
                            <span>
                                Eurorack modules and radical electronic music
                                <span role="img" aria-label="scream">
                                    😱😱😱
                                </span>
                            </span>
                        </div>
                        <div>
                            <span>
                                Find us on{' '}
                                <a href="https://fancyyyyy.bandcamp.com/">
                                    Bandcamp
                                </a>{' '}
                                and{' '}
                                <a href="https://twitter.com/fancyyyyylabel">
                                    Twitter
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <Item
                        img={tom}
                        artist="Tom Mudd"
                        title="Brass Cultures"
                        url="https://fancyyyyy.bandcamp.com/album/brass-cultures"
                    />
                    <Item
                        img={rungs}
                        title="Rung Divisions"
                        url="https://www.fancysynthesis.net/"
                    />
                    <Item
                        img={fua}
                        title="Fua"
                        url="https://fancyyyyy.bandcamp.com/album/fua"
                    />
                </div>
            </div>
        </Layout>
    );
}
