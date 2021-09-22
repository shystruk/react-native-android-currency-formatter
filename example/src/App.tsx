import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AndroidCurrencyFormatter from 'react-native-android-currency-formatter';
import { useEffect, useState } from 'react';

export default function App() {
	const [USD, setUSD] = useState<string>('');

	useEffect(() => {
		AndroidCurrencyFormatter
			.numberFormatAsync(1000000.25, 'USD', 'en', 'US')
			.then(data => setUSD(data));
	}, []);

	return (
		<View style={styles.container}>
	  		<Text style={styles.text}>
				{AndroidCurrencyFormatter.numberFormat(30000, 'USD', 'en', 'US')}
	  		</Text>
			<Text style={styles.text}>
				{AndroidCurrencyFormatter.numberFormat(500500.50, 'EUR', 'de', 'DE')}
			</Text>
			<Text style={styles.text}>
				{AndroidCurrencyFormatter.numberFormat(10540.25, 'YER', 'jp', 'JP')}
			</Text>
			{ !!USD &&
				<Text style={{ ...styles.text, paddingTop: 30 }}>
					ASYNC: {USD}
				</Text>
			}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
	text: {
		fontSize: 30,
		fontWeight: 'bold',
		paddingBottom: 10,
	},
});
