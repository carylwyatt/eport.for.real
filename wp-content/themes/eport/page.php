<?php get_header(); ?>
			
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