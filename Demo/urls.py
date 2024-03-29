
"""Demo URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import  url
from web import views
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
urlpatterns = [
    url(r'^pattern_change_detection/', views.pattern_change_detection),
    url(r'^admin/', admin.site.urls),
    url(r'^default/', views.default),
    url(r'^index_new/', views.index_new),
    url(r'^login/', views.login),
    url(r'^add_account/', views.add_account),
    url(r'^password_revise/', views.password_revise),
    url(r'^permissions_query/', views.permissions_query),
    url(r'^account_inquiry/', views.account_inquiry),
    url(r'^ib_roller_shutters/', views.ib_roller_shutters),
    url(r'^info_revise/', views.info_revise),
    url(r'^authority_management/', views.authority_management),
    url(r'^home_municipal/', views.home_municipal),
    url(r'^move_out/', views.move_out),
    url(r'^demolition_management/', views.demolition_management),
    url(r'^demolition_compare/', views.demolition_compare),
    url(r'^demolition_plotting/', views.demolition_plotting),
    url(r'^ib_plotting/', views.ib_plotting),
    url(r'^offence_build/', views.offence_build),
    url(r'^general_survey/', views.general_survey),
    url(r'^graphic_look/', views.graphic_look),
    url(r'^resource_management/', views.resource_management),
    url(r'^resource_search/', views.resource_search),
    url(r'^rm_show_map/', views.rm_show_map),
    url(r'^ib_event_management/', views.ib_event_management),
    url(r'^gs_show_map/', views.gs_show_map),
    url(r'^gs_show_list/', views.gs_show_list),
    url(r'^ib_plotting/', views.ib_plotting),
    url(r'^developing/', views.developing),
    url(r'^view_interesting_area/', views.view_interesting_area),
    url(r'^interesting_area_management/', views.interesting_area_management),
    url(r'^seperate_load_draw/', views.seperate_load_draw),
    url(r'^history_data/', views.history_data),
    url(r'^save_interesting_area/', views.save_interesting_area),
    url(r'^load_interesting_area/', views.load_interesting_area),
    url(r'^_interesting_area_search/', views._interesting_area_search),
##########################################################################
    url(r'^area_status_revise/', views.area_status_revise),
    url(r'^is_authenticated/', views.is_authenticated),
    url(r'^delete_usr/', views. delete_usr),
    url(r'^login_check/', views.login_check),
    url(r'^password_reset/', views.password_reset),
    url(r'^usr_info_revise/', views.usr_info_revise),
    url(r'^logout/', views.mylogout),
    url(r'^permission_revise/', views.permission_revise),
    url(r'^add_usr/', views.add_usr),
    url(r'^_account_inquiry/', views._account_inquiry),
    url(r'^check_username/', views.check_username),
    url(r'^_permissions_query/',views._permissions_query),
    url(r'^status_revise/', views.status_revise),
    url(r'^save_draw/', views.save_draw),
    url(r'^update_draw/', views.update_draw),
    url(r'^update_interesting_area/', views.update_interesting_area),
    url(r'^load_all_draw/', views.load_all_draw),
    #url(r'^query_draw/', views.query_draw),
    url(r'^_delete_draw/', views._delete_draw),
    url(r'^_delete_interesting_area/', views._delete_interesting_area),
    url(r'^map_inquiry/', views.map_inquiry),
    url(r'^_map_inquiry/', views._map_inquiry),
    url(r'^_gs_show_list/',views._gs_show_list),
    url(r'^_ib_event_search/',views._ib_event_search),
    url(r'^_de_event_search/',views._de_event_search),
    url(r'^no_permissions/',views.no_permissions),
    url(r'^not_login/',views.not_login),
    url(r'^load_demolition_draw/',views.load_demolition_draw),
    url(r'^load_ibuild_draw/',views.load_ibuild_draw),
    ##########################################################
    url(r'^user_center/', views.user_center),
    url(r'^account_management/', views.account_management),
    url(r'^uploadImage/', views.uploadImage),
    url(r'^cancelPublish/',views.cancelPublish),
    url(r'^deleteImage/',views.deleteImage),
    url(r'^downloadImage/',views.downloadImage),
    url(r'^test/',views.test),
    url(r'^login_page/', views.login_page),
    url(r'^_resource_search/', views._resource_search),

    url(r'^_autographiclabel_inquiry/', views._autographiclabel_inquiry),
    url(r'^new_password_reset/', views.new_password_reset),
    url(r'^locate/', views.locate),
    url(r'^regional_present_situation/', views.regional_present_situation),
    url(r'^region_situation/', views.region_situation),
    url(r'^homeceshi/', views.homeceshi),
    url(r'^event_statics/', views.event_statics),
    url(r'^ziyuanfenleixiangcha/', views.ziyuanfenleixiangcha),

]

urlpatterns += staticfiles_urlpatterns()