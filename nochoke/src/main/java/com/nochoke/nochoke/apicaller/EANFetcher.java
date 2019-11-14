package com.nochoke.nochoke.apicaller;

import com.nochoke.nochoke.EAN.EANItem;

public interface EANFetcher {
    EANItem getProductByEan(String EAN);
}
