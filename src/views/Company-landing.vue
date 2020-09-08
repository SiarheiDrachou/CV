<template>
    <div>
        <Header />

        <main class="main">
            <WhatWeDoSection />

            <AchievmentsSection />

            <OurApproachSection />

            <IdeaSection />

            <TechnologiesSection />

            <ProjectsSection />
        </main>

        <Footer />
    </div>
</template>

<script>
    import Header from '../components/Company-landing/Header'
    import WhatWeDoSection from '../components/Company-landing/WhatWeDoSection'
    import AchievmentsSection from '../components/Company-landing/AchievmentsSection'
    import OurApproachSection from '../components/Company-landing/OurApproachSection'
    import IdeaSection from '../components/Company-landing/IdeaSection'
    import TechnologiesSection from '../components/Company-landing/TechnologiesSection'
    import ProjectsSection from '../components/Company-landing/ProjectsSection'
    import Footer from '../components/Company-landing/Footer'

    export default {
        components: {
            Header,
            WhatWeDoSection,
            AchievmentsSection,
            OurApproachSection,
            IdeaSection,
            TechnologiesSection,
            ProjectsSection,
            Footer
        }
    }
</script>

<style lang="scss" scoped>
    body {
        margin: 0;
        padding: 0;
        height: 100%;
        width: 100%;
        font-family: 'Source Sans Pro';
    }
</style>