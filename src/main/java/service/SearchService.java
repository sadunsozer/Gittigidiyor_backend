package service;

import apicall.EbayAPICall;
import dto.ItemDetailResult;
import dto.SummaryResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SearchService implements SearchServiceImpl {

    @Autowired
    EbayAPICall ebayAPICall;

    public SummaryResult getSummaryResultByKeyword(String keyword) throws Exception {


        return ebayAPICall.getItems(keyword);
    }

    public ItemDetailResult getItemDetail(String itemId) {
        return ebayAPICall.getItemDetail(itemId);
    }
}
