package controller;


import dto.ItemDetailResult;
import dto.SummaryResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import service.SearchServiceImpl;

@RestController(value = "/search")
public class SearchController {

    @Autowired
    private SearchServiceImpl searchService;

    @RequestMapping("/item_summary")
    public SummaryResult getItemSummary(@RequestParam(value="keyword", defaultValue="drone") String keyword) {
        try {
            return searchService.getSummaryResultByKeyword(keyword);
        } catch (Exception e) {
            e.printStackTrace();
        }
      return null;
    }

    @RequestMapping("/item_detail")
    public ItemDetailResult getItemDetail(@RequestParam(value="itemId") String itemId) {
        try {
            return searchService.getItemDetail(itemId);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
}
