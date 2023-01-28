import { FC } from "react";
import WhatsappBtn, { WhatsappBtnProps } from "components/WhatsappBtn";

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

interface paymentDataProps {
    name: string,
    img?: string,
    imgClass?: string,
    account?: string,
    Value?: string | FC<WhatsappBtnProps>,
    rif?: string,
}

export const paymentData: paymentDataProps[] = [
    {
        name: 'Banco Banesco',
        imgClass: 'my-3',
        img: 'banesco.jpg',
        account: 'Sucrenet, C.A.',
        Value: '0134-0471-21-4711041228',
        rif: 'RIF: J-50135899-0'
    },
    {
        name: 'Bancamiga',
        imgClass: 'my-5',
        img: 'bancamiga.png',
        account: 'Sucrenet, C.A.',
        Value: '0172-0111-5111-1905-7568',
        rif: 'RIF: J-50135899-0'
    },
    {
        name: 'Banco de Venezuela',
        imgClass: 'my-5',
        img: 'bdv.png',
        account: 'Sucrenet, C.A.',
        Value: '0102-0674-06-00-00318527',
        rif: 'RIF: J-50135899-0'
    },
    {
        name: 'Pago móvil',
        imgClass: 'my-3',
        img: 'pagomovil.png',
        rif: 'RIF: J501358990',
        account: 'Banesco (0134)',
        Value: '04122305755'
    },
    {
        name: 'Efectivo en Bs o Divisas en taquilla',
        imgClass: 'my-5',
        img: 'dolar.png',
        Value: 'En nuestra oficina ubicada en la calle Ayacucho cruce con Boyacá, Edificio Adis Local N°2. Cumaná, estado Sucre. (Detrás del Edif. de Cantv)'
    },
    {
        name: 'Pago Zelle',
        imgClass: 'my-4',
        img: 'zelle.png',
        Value: WhatsappBtn
    },
    {
        name: 'Banesco Panamá',
        Value: WhatsappBtn
    },
    {
        name: 'Pago personalizado (a domicilio)',
        Value: WhatsappBtn
    }
];