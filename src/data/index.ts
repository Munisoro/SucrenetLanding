export interface Plan {
    id: string,
    title: string,
    header: string,
    content: string,
    img: string,
    features: Array<String>
}

export const businessData: Plan[] = [{
    id : 'a',
    title: 'Financial Planning',
    header: '25 Years Of Experience In Financial Support',
    content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
    img: 'service-1.jpg',
    features: [
        'Secured Loans',
        'Credit Facilities',
        'Cash Advanced'
    ]
}, {
    id : 'b',
    title: 'Cash Investment',
    header: '25 Years Of Experience In Financial Support',
    content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
    img: 'service-2.jpg',
    features: [
        'Secured Loans',
        'Credit Facilities',
        'Cash Advanced'
    ]
}, {
    id : 'c',
    title: 'Financial Consultancy',
    header: '25 Years Of Experience In Financial Support',
    content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
    img: 'service-3.jpg',
    features: [
        'Secured Loans',
        'Credit Facilities',
        'Cash Advanced'
    ]
}, {
    id : 'd',
    title: 'Business Loans',
    header: '25 Years Of Experience In Financial Support',
    content: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo erat amet.',
    img: 'service-4.jpg',
    features: [
        'Secured Loans',
        'Credit Facilities',
        'Cash Advanced'
    ]
}];

export const domesticData = businessData.map((e) => e).reverse();