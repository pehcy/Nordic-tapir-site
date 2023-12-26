import { PageProps } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { SEO } from "../components/SEO";

const WorkPage: React.FC<PageProps> = () => {
    return (
        <Layout>
            <div className="mt-5">
                <div className="max-w-3xl overflow-hidden relative mx-auto p-8">
                    <div className="flex flex-col">
                        <div className="py-6">
                            <section id="intro" className="blog-main">
                                <p className="prose-xl">
                                    As a software engineer in network testing R&D Department, my work involve in C# .NET,
                                    Java, and Linux development through the use of design systems. I experienced
                                    in problem solving and providing solutions for individual entrepreneurs to 
                                    large companies and everything in between. My background includes experience 
                                    in computer science, mathematics, web design and technical writting. In advance, 
                                    I occasionally give tuition to college students on mathematical subjects 
                                    (such as Calculus, Statistics, etc.) at my free time.
                                </p>
                                <p>
                                    Here on linkedIn, you'll find some detailed informations on some of the work I've 
                                    done throughout my career. Feel free to drop me an email to get in touch.
                                </p>
                            </section>
                            <section id="experience" className="pt-12 pb-8 border-b border-slate-800">
                                <h1 className="text-gray-500 text-lg semibold uppercase tracking-wider">Experience</h1>
                                <div className="flex items-start justify-between mt-4 py-4">
                                    <p className="font-light w-1/4">2021 Nov - Now</p>
                                    <div className="flex-col w-2/3">
                                        <div className="pb-6">
                                            <h1 className="font-semibold text-lg">Infovista</h1>
                                            <address className="text-xs">Kuala Lumpur</address>
                                            <p className="pt-2 text-gray-600 text-sm">I migrated the important parts of TEMS Cloud services to be compatible 
                                                with RHEL and Ubuntu Linux servers. I also worked in other TEMS projects,
                                                such as the JSON parser for network perfomance summary written in TypeScript, and IPSniffing toolset
                                                to allow automate testing and benchmark the results of Android applications. 
                                                I also performed some research on how to measure the figure of merits and rebuffering state 
                                                on youtube application.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between mt-4 py-4">
                                    <p className="font-light w-1/4">2021 Jan - 2021 Oct</p>
                                    <div className="flex-col w-2/3">
                                        <div className="pb-6">
                                            <h1 className="font-semibold text-lg">Appxplore Sdn Bhd.</h1>
                                            <address className="text-xs">Kuala Lumpur</address>
                                            <p className="pt-2 text-gray-600 text-sm">I continued the dash board project in which use to collect
                                                the data from our game users. It served the purpose to produce a robust statistics results 
                                                on the download rate and purchases items of our main game -- The Masketeer.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-start justify-between mt-4 py-4">
                                    <p className="font-light w-1/4">2019</p>
                                    <div className="flex-col w-2/3">
                                        <div className="pb-6">
                                            <h1 className="font-semibold text-lg">Spassolab Sdn Bhd.</h1>
                                            <address className="text-xs">Kuala Lumpur</address>
                                            <p className="pt-2 text-gray-600 text-sm">During my internship, I worked in an outsourcing 
                                                software companies. As the team leader,
                                                I guide my teams and help to enhance the products for our customers. We had work through 
                                                several projects, such as crytocurrency e-wallet and flight-booking system.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="academic" className="pt-12 pb-8 border-b border-slate-800">
                                <h1 className="text-gray-500 text-lg semibold uppercase tracking-wider">Academic</h1>
                                <div className="flex items-start justify-between mt-4 py-4">
                                    <p className="font-light w-1/4">2020</p>
                                    <div className="flex-col w-2/3">
                                        <div className="pb-6">
                                            <h1 className="font-semibold text-lg">Universiti Tunku Abdul Rahman</h1>
                                            <address className="text-xs">Kuala Lumpur</address>
                                            <h4>Bachelor of Science (Honours), Applied Mathematics with Computer Science</h4>
                                            <p className="pt-2 text-gray-600 text-sm">During my final year,
                                                I had wrote the thesis on fuzzy clustering in dynamic network graph,
                                                which helps to study on the infection clusters of the pandemic 
                                                COVID-19.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </section>

                            <section id="programming" className="pt-12 pb-8 border-b border-slate-800">
                                <h1 className="text-gray-500 text-lg semibold uppercase tracking-wider">Software Development</h1>
                                <div className="flex flex-col pb-7">
                                    <p className="text-lg font-semibold py-3">Programming languages</p>
                                    <p className="text-base">
                                        C, C#, Haskell, OCaml, Rust, Python, Java, TypeScript, Javascript,
                                        Golang, Julia, R, SAS
                                    </p>
                                    <p>(Not restricted on the languages above)</p>
                                </div>
                                <div className="flex flex-col py-6">
                                    <p className="text-lg font-semibold py-3">Machine Learning</p>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li>Familiar with PyTorch 2.0 and Tensorflow for deep learning.</li>
                                            <li>Training Self-Attention transformers model for LLM;</li>
                                            <li>Convolutional Neural Network with ResNet, AlexNet for image processing;</li>
                                            <li>Transfer learning with 🤗 pretrained language model, such as BERT, T5;</li>
                                            <li>Reinforcement Learning with Q-learning algorithm;</li>
                                            <li>Data Visualisation with JavaScript interactive libraries (Vega-lite, D3.js);</li>
                                            <li>Deploy Gradio application to 🤗 space; </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col py-6">
                                    <p className="text-lg font-semibold py-3">Web Development</p>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li>HTML, CSS, JQuery and ES6;</li>
                                            <li>Golang;</li>
                                            <li>TypeScript;</li>
                                            <li>CSS frameworks such as BootstrapCSS, TailwindCSS;</li>
                                            <li>ReactJS, as well as their frameworks: GatsbyJS, NextJS;</li>
                                            <li>Micro-service design with NestJS and RxJs;</li>
                                            <li>Redis and RabbitMQ middleware;</li>
                                            <li>SQL and NoSQL databases such as MySQL, PostgreSQL, MongoDB, DuckDB;</li>
                                            <li>GraphQL API;</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col py-6">
                                    <p className="text-lg font-semibold py-3">Packet Analysis</p>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li>iPerf3;</li>
                                            <li>TWAMP;</li>
                                            <li>WireShark;</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col py-6">
                                    <p className="text-lg font-semibold py-3">Game Development</p>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li>C# with Unity 3D game engine;</li>
                                            <li>GLSL shaders;</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col py-6">
                                    <p className="text-lg font-semibold py-3">Mobile Development</p>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li>Java with Android Studio;</li>
                                            <li>Xamarin;</li>
                                            <li>Python UIAutomator for automate testing on Android 13;</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col py-6">
                                    <p className="text-lg font-semibold py-3">Linux and DevOps</p>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li>Familiar with Debian/Ubuntu and RHEL/CentOS Ecosystem;</li>
                                            <li>Packaging .deb and .rpm installers for Debian and RHEL;</li>
                                            <li>Systemd service daemon;</li>
                                            <li>YAML file for Azure DevOps pipeline;</li>
                                            <li>Docker / Podman;</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>

                            <section id="mathematics" className="py-7">
                                <h1 className="text-gray-500 text-lg semibold uppercase tracking-wider">Mathematics</h1>
                                <div className="flex flex-col py-7">
                                    <p className="text-lg font-semibold py-3">Numerical Computing</p>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li>Familiar with Mathematica, SAS, MATLAB, Julia and R;</li>
                                            <li>solving Ordinary Differential Equation, 
                                                Partial Differential Equation, and Heat equation;
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="flex flex-col pt-5">
                                    <p className="text-lg font-semibold pt-3">Others</p>
                                    <div className="ml-5">
                                        <ul className="list-disc">
                                            <li>Multivariate Calculus;</li>
                                            <li>Linear Algebra;</li>
                                            <li>Group Theory;</li>
                                            <li>Probability and Measure Theory;</li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default WorkPage;

export const Head = () => (
    <SEO title="Tapir's Resumé" pathname={location.pathname} />
)