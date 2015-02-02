<?php get_header(); ?>
			

  <div class="off-canvas-wrap" data-offcanvas>
  <div class="inner-wrap">
    <nav class="tab-bar">
      <section class="left-small">
        <a class="left-off-canvas-toggle menu-icon" href="#"><span></span></a>
      </section>

    </nav>

    <aside class="left-off-canvas-menu">
      <ul class="off-canvas-list">
        <li><label>Table of Contents</label></li>
        <li><a href="#">Introduction</a></li>
        <li><a href="#">Philosophy</a></li>
        <li><a href="#">Competency A</a></li>
        <li><a href="#">Competency B</a></li>
        <li><a href="#">Competency C</a></li>
        <li><a href="#">Competency D</a></li>
        <li><a href="#">Competency E</a></li>
        <li><a href="#">Competency F</a></li>
        <li><a href="#">Competency G</a></li>
        <li><a href="#">Competency H</a></li>
        <li><a href="#">Competency I</a></li>
        <li><a href="#">Competency J</a></li>
        <li><a href="#">Competency K</a></li>
        <li><a href="#">Competency K</a></li>
        <li><a href="#">Competency M</a></li>
        <li><a href="#">Competency N</a></li>
        <li><a href="#">Conclusion</a></li>
      </ul>
    </aside>

			

				


    <section class="main-section">
      <div class="row main-content">
      <div class="large-12 columns">
        
        <article>
          <h3><?php the_title(); ?></h3>
            <?php 
				if (have_posts()) {
				  while (have_posts()) {
				    the_post();
				    the_content(); 
				  }
				} ?>
        </article>
      </div>
    </div>
    </section>

  
    
    
    

			<a class="exit-off-canvas"></a>

  </div>
</div>

    
    

   <a href="#0" class="cd-top">Top</a>     

<?php get_footer(); ?>