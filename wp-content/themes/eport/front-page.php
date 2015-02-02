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
        <li><a href="#">A: Ethics</a></li>
        <li><a href="#">B: Something Else</a></li>
        <li><a href="#">C: Stuff</a></li>
        <li><a href="#">D: Stuff</a></li>
        <li><a href="#">E: Stuff</a></li>
        <li><a href="#">F: Stuff</a></li>
        <li><a href="#">G: Stuff</a></li>
        <li><a href="#">H: Stuff</a></li>
        <li><a href="#">I: Stuff</a></li>
        <li><a href="#">J: Stuff</a></li>
        <li><a href="#">K: Stuff</a></li>
        <li><a href="#">L: Stuff</a></li>
        <li><a href="#">M: Stuff</a></li>
        <li><a href="#">N: Stuff</a></li>
        <li><a href="#">O: Stuff</a></li>
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