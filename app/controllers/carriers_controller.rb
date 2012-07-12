class CarriersController < ApplicationController
  helper_method :sort_column, :sort_direction

  # fetch all records
  def index
    @o_all = Carrier.search(params[:search]).order(sort_column + " " + sort_direction).paginate(:per_page => 5, :page => params[:page])
  end
  
  #fetch single record and display
  def show
    @o_single = Carrier.find(params[:id])
  end
  
  # generate a form for new record
  def new
    @o_single = Carrier.new
  end
  
  #create a new record and save in database
  def create
    @o_single = Carrier.new(params[:carrier])
    if @o_single.save
      flash[:notice] = t("general.successfully_created")
      redirect_to carriers_path
    else
      render :action => 'new'
    end
  end
  
  # generate a edit form to update the record
  def edit
    @o_single = Carrier.find(params[:id])
  end
  
  # update a record and save in database
  def update
    @o_single = Carrier.find(params[:id])
    if @o_single.update_attributes(params[:carrier])
      flash[:notice] = t("general.successfully_updated")
      redirect_to carriers_path
    else
      render :action => 'edit'
    end
  end
  
  #destoy a record
  def destroy
    @o_single = Carrier.find(params[:id])
    @o_single.destroy
    flash[:notice] = t("general.successfully_destroyed")
    redirect_to carriers_url
  end
  
  private
  
  # sort column private method
  def sort_column
    Carrier.column_names.include?(params[:sort]) ? params[:sort] : "name"
  end
  
  # order records private method
  def sort_direction
    %w[asc desc].include?(params[:direction]) ? params[:direction] : "asc"
  end
end
