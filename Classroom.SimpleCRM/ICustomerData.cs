﻿using System.Collections.Generic;

namespace Classroom.SimpleCRM
{
    public interface ICustomerData
    {
        /// <summary>
        /// Gets a single customer, by id.
        /// </summary>
        /// <param name="customerId"></param>
        /// <returns></returns>
        Customer Get(int customerId);
        /// <summary>
        /// Adds a new item, to be saved on next commit.
        /// </summary>
        /// <param name="item"></param>
        void Add(Customer item);
        /// <summary>
        /// Marks an item as updated, to be saved on next commit.
        /// </summary>
        /// <param name="item"></param>
        void Update(Customer item);
        /// <summary>
        /// Marks an item as deleted, to be saved on next commit.
        /// </summary>
        /// <param name="item"></param>
        void Delete(Customer item);
        /// <summary>
        /// Saves changes to new or modified customers.
        /// </summary>
        void Commit();
    }
}
