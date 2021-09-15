import { NativeModules } from 'react-native';

type AndroidCurrencyFormatterType = {
	numberFormat(
		amount: number, currencyCode: string, language: string, country: string
	): number,
	numberFormatAsync(
		amount: number, currencyCode: string, language: string, country: string
	): Promise<number>,
};

const { AndroidCurrencyFormatter } = NativeModules;

export default AndroidCurrencyFormatter as AndroidCurrencyFormatterType;
