# rake db:seed
# will seed the defined input below to the db
class Seed
  attr_reader :seed
  def initialize
    @seed
  end
  
  def run
    generate_data
  end
  
  def generate_data
    u = User.new
    u.email = "glc@admin.com"    
    u.password = "glcsmart"
    if u.save!  
      puts "created the user #{u.email}"
    end
  end

end

seed = Seed.new
seed.run