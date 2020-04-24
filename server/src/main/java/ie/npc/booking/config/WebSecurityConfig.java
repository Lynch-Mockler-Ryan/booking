package ie.npc.booking.config;

import lombok.extern.log4j.Log4j2;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.Collections;

/**
 * @author colm.ryan
 * @since 12/12/2019
 *
 * configuration to allow cross origin requests.  This is required while the UI and Server applications are running
 * separately - particularly during development
 * @TODO how should this be handled in a production environment?
 */
@Log4j2
@Configuration
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  @Override
  protected void configure(HttpSecurity http) throws Exception {
    log.debug("configure ...");
    http.cors().and().csrf().disable();
    http.headers().frameOptions().disable();
    log.debug("... configure");
  }

  @Bean
  public FilterRegistrationBean<CorsFilter> simpleCorsFilter() {
    log.debug("simpleCorsFilter ...");

    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    CorsConfiguration config = new CorsConfiguration();
    config.setAllowCredentials(true);
    config.setAllowedOrigins(Collections.singletonList("http://localhost:4200"));
    config.setAllowedMethods(Collections.singletonList("*"));
    //config.setAllowedMethods(ImmutableList.of("HEAD", "GET", "POST", "PUT", "DELETE", "PATCH", "*"));
    config.setAllowedHeaders(Collections.singletonList("*"));
    //config.setAllowedHeaders(ImmutableList.of("Authorization", "Cache-Control", "Content-Type"));
    source.registerCorsConfiguration("/**", config);
    FilterRegistrationBean<CorsFilter> bean = new FilterRegistrationBean<>(new CorsFilter(source));
    bean.setOrder(Ordered.HIGHEST_PRECEDENCE);

    log.debug("... simpleCorsFilter");
    return bean;
  }
}
