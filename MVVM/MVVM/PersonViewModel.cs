using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace MVVM
{
    //要实现通知 ——>就要实现INotifyPropertyChanged
    public  class PersonViewModel:INotifyPropertyChanged
    {
        private string title1;
        private string title2;
        public PersonViewModel(){}
        public PersonViewModel(string Title1, string Title2, IEnumerable<PersonModel> collection)
        {
            this.title1 = Title1;
            this.title2 = Title2;
            Collection = new ObservableCollection<PersonModel>();
            foreach (var item in collection)
            {
                Collection.Add(item);
                
            }
 
        }
        //实现接口  + 处理方法
        public event PropertyChangedEventHandler PropertyChanged;
        private void EventHendle(string propertyNanme)
        {
            if (PropertyChanged != null)
            {
                PropertyChanged(this,new PropertyChangedEventArgs (propertyNanme));
            }
        }
        
        public string Title1 { get { return title1; }set { Title1 = value;EventHendle(Title1);}}
        public string Title2 { get{return title2;} set{Title2=title2;EventHendle(Title2);}}

        public ObservableCollection<PersonModel> Collection { get; set; }
        
    }
}
