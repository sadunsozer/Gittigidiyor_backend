package service;

import dto.ItemDetailResult;
import dto.SummaryResult;


public interface SearchServiceImpl {

     SummaryResult getSummaryResultByKeyword(String keyword) throws Exception;
     ItemDetailResult getItemDetail(String itemId);
}
