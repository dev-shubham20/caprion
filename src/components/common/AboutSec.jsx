import aboutImage from '../../assets/image/Section 2 Image.png';

export default function AboutSec() {
    return (
        <>
            {/* about section start */}
            <section id="about"
                className="bg-[#edf8ff] lg:bg-[linear-gradient(to_right,#ffffff_25%,#edf8ff_25%)] xl:bg-[linear-gradient(to_right,#ffffff_22%,#edf8ff_22%)]">
                <div className="section-pad rounded-none shadow-none">
                    <div className="about-grid mx-auto max-w-7xl items-start lg:gap-16">
                        <div className="overflow-hidden rounded-[2rem] shadow-md shadow-slate-200/50">
                            <img src={aboutImage} alt="About Caprion Pharma"
                                className="h-full min-h-[300px] w-full object-cover" />
                        </div>

                        <div className="pt-2 lg:pt-6">
                            <h2 className="heading-primary">
                                Committed to Quality Healthcare That Improves Lives.
                            </h2>
                            <div className="space-y-6 text-[15px] leading-relaxed text-slate-800">
                                <p>
                                    Caprion Pharma Pvt. Ltd. delivers high-quality pharmaceutical solutions across gastroenterology, neurology, anti-infectives, and pain management.
                                </p>
                                <p>
                                   Focused on innovation, quality, and patient care, we strive to provide reliable medicines that enhance health and well-being.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* about section end */}
        </>
    )
}