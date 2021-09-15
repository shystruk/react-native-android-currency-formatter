package com.reactnativeandroidcurrencyformatter;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import java.text.NumberFormat;
import java.util.Currency;
import java.util.Locale;

@ReactModule(name = AndroidCurrencyFormatterModule.NAME)
public class AndroidCurrencyFormatterModule extends ReactContextBaseJavaModule {
    public static final String NAME = "AndroidCurrencyFormatter";

    public AndroidCurrencyFormatterModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    public String numberFormat(double amount, String currencyCode, String language, String country) {
		return getCurrency(amount, currencyCode, language, country);
    }

    @ReactMethod()
	public void numberFormatAsync(double amount, String currencyCode, String language, String country, Promise promise) {
		promise.resolve(getCurrency(amount, currencyCode, language, country));
	}

	private String getCurrency(double amount, String currencyCode, String language, String country) {
		try {
			Currency currency = Currency.getInstance(currencyCode);
			NumberFormat format = NumberFormat.getCurrencyInstance(new Locale(language, country));
			format.setMaximumFractionDigits(currency.getDefaultFractionDigits());
			return format.format(amount);
		} catch (Exception e) {
			return "N/A";
		}
	}
}
