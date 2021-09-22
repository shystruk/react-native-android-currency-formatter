import { NativeModules } from 'react-native';

type AndroidCurrencyFormatterType = {
	numberFormat(
		amount: number, currencyCode: string, language: string, country: string
	): string,
	numberFormatAsync(
		amount: number, currencyCode: string, language: string, country: string
	): Promise<string>,
};

const { AndroidCurrencyFormatter } = NativeModules;

export default AndroidCurrencyFormatter as AndroidCurrencyFormatterType;
