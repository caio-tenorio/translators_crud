package translator.translator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import translator.translator.entity.Translator;

@Repository
public interface TranslatorRepository extends JpaRepository<Translator, Long> {

}
