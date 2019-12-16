package com.nochoke.nochoke.history;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HistoryService {
    @Autowired
    HistoryRepository historyRepository;

    public History saveHistory(History history){
        historyRepository.save(history);
        return history;
    }

}
