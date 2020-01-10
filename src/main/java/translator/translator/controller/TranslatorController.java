package translator.translator.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import translator.translator.entity.Translator;
import translator.translator.repository.TranslatorRepository;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class TranslatorController {

    @Autowired
    private TranslatorRepository _translatorRepository;

    @RequestMapping(value = "/translator", method = RequestMethod.GET)
    public List<Translator> Get() {
        return _translatorRepository.findAll();
    }

    @RequestMapping(value = "/translator/{id}", method = RequestMethod.GET)
    public ResponseEntity<Translator> GetById(@PathVariable(value = "id") long id)
    {
        Optional<Translator> translator = _translatorRepository.findById(id);
        if(translator.isPresent())
            return new ResponseEntity<Translator>(translator.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/translator", method =  RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE)
    public Translator Post(@Valid @RequestBody Translator translator)
    {
        return _translatorRepository.save(translator);
    }

    @RequestMapping(value = "/translator/{id}", method =  RequestMethod.PUT,  consumes = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<Translator> Put(@PathVariable(value = "id") long id, @Valid @RequestBody Translator newTranslator)
    {
        Optional<Translator> oldTranslator = _translatorRepository.findById(id);
        if(oldTranslator.isPresent()){
            Translator translator = oldTranslator.get();
            translator.setName(newTranslator.getName());
            translator.setEmail(newTranslator.getEmail());
            translator.setSourceLanguage(newTranslator.getSourceLanguage());
            translator.setTargetLanguage(newTranslator.getTargetLanguage());

            _translatorRepository.save(translator);
            return new ResponseEntity<Translator>(translator, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/translator/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
    {
        Optional<Translator> translator = _translatorRepository.findById(id);
        if(translator.isPresent()){
            _translatorRepository.delete(translator.get());
            return new ResponseEntity<>(HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
}
