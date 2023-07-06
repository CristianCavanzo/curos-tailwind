import React from 'react';
import { Title } from '../Title';
import { TitleFaqs } from './TitleFaqs';
import { DescriptionFaqs } from './DescriptionFaqs';

const FAQS = () => {
	return (
		<div className="flex flex-col gap-y-4">
			<Title>FAQS</Title>
			<div>
				<TitleFaqs>Politica de cancelación</TitleFaqs>
				<DescriptionFaqs>
					Para estancias menores a una semana es importante avisar con 3 días de anticipación, de
					caso contario será sancionado.
				</DescriptionFaqs>
			</div>
			<div>
				<TitleFaqs>Métodos de pago</TitleFaqs>
				<DescriptionFaqs>
					Aceptamos distintos métodos de pago: VISA, MasterCard, American Express, Paypal y Binance
				</DescriptionFaqs>
			</div>
			<div>
				<TitleFaqs>Politica de cancelación</TitleFaqs>
				<DescriptionFaqs>
					Para estancias menores a una semana es importante avisar con 3 días de anticipación, de
					caso contario será sancionado.
				</DescriptionFaqs>
			</div>
			<div>
				<TitleFaqs>Mascotas</TitleFaqs>
				<DescriptionFaqs>
					El tema de las mascotas dependerá directamente del anfitrión.
				</DescriptionFaqs>
			</div>
			<div>
				<TitleFaqs>Información de Seguridad</TitleFaqs>
				<DescriptionFaqs>
					Todas nuestras estancias cuentan con seguro en caso de accidentes
				</DescriptionFaqs>
			</div>
			<div>
				<TitleFaqs>Estancias Largas</TitleFaqs>
				<DescriptionFaqs>
					Contamos con estancias de hasta 3 meses, en este caso es requerido un anticipo con un
					monto del 50% del valor de la renta
				</DescriptionFaqs>
			</div>
		</div>
	);
};

export { FAQS };
