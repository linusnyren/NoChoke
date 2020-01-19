package com.nochoke.nochoke.apicaller;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public interface EANFetcher {
    JSONObject getProductByEan(String EAN) throws JSONException;
    JSONArray getProductsByText(String text) throws JSONException;
}
